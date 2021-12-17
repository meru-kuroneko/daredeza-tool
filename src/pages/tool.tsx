import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "@fontsource/amatic-sc";

// @ts-ignore
const useStyles = makeStyles(() => ({
  toolContiner: {
    marginTop: '32px',
  },
  inputContiner: {
    marginTop: '24px',
  }
}));

const Tool = () => {
  const classes = useStyles();
  const [names, setNames] = useState(Array(4).fill(''))
  const [result, setResult] = useState(Array());

  function shuffle() {
    // 入力チェック
    if(names.includes('')){
      alert("空欄があります");
      return
    };
    const dupplicateCheck = Array.from(new Set(names))
    if(names.length != dupplicateCheck.length){
      alert("同じ名前があります");
      return
    }

    var names_copy = names.slice();
    while(check(names, names_copy).includes(true)){
      for(var i = (names_copy.length - 1); 0 < i; i--){
        // 0〜(i+1)の範囲で値を取得
        var random_number = Math.floor(Math.random() * (i + 1));
        // 要素の並び替えを実行
        var tmp = names_copy[i];
        names_copy[i] = names_copy[random_number];
        names_copy[random_number] = tmp;
      }
      console.log(check(names, names_copy)) 
    }
    setResult(names_copy)
  }
  
  function check(list1, list2){
    var check = []
    list1.map((item, i) => {
      check.push((item == list2[i]))
    })
    return check
  }

  function change(name, i){
    var names_copy = names.slice();
    names_copy[i] = name
    setNames(names_copy)
  }

  return (
    <Container className={classes.inputContiner}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="subtitle1">
            【使い方】
          </Typography>
          <Typography variant="body1" component="div">
            それぞれのテキストボックスに参加者の名前を入れてください。<br/>
            テキストボックスが足りなかったら+-で調整してください。<br/>
            全て入力できたら「シャッフル」ボタンを押してください。<br/>
            結果が末尾に表示されます。
          </Typography>
          <Typography variant="subtitle1">
            【注意点】
          </Typography>
          <Typography variant="body1" component="div">
            入力時は以下のチェックをしてます。<br/>
            ・空欄がないか（多かったら-で消してください）<br/>
            ・名前の重複がないか（同じお名前の方は判別できるようにしてください）
          </Typography>
          
        </CardContent>
      </Card>
      <div className={classes.inputContiner}>
        {names.map((name, i) => {
          return (<TextField value={name} onChange={e => change(e.target.value, i)} />)
        })}

        <br/>
        <Button variant="contained" onClick={e => shuffle()}>シャッフル</Button>
        <br/>
        
        {result.length != 0 ? (
          names.map((name, i) => {
            return <>{name} → {result[i]}<br/></>
          })): ''
        } 
      </div>
    </Container>
  );
}
export default Tool;