const quiz = [
  {
    question:'床に落とした食べ物でも「3秒ルール」という言葉を使う人がいます。実際には落ちて何秒までなら拾って食べても大丈夫でしょうか？',
    answers: [
      '1秒',
      '5秒',
      '10秒',
      '落とした時点でアウト'
    ],
    correct: '落とした時点でアウト'
  },   {
      question:'お茶漬けの素に入っている「あられ」には、何の意味があるでしょうか？',
      answers: [
        '湿気予防のため',
        '食感がいいから',
        '1香りがいいから',
        '色合いのため'
      ],
      correct: '湿気予防のため'
    },   {
        question:'「シルバー人材センター」など、高齢者を表す色というイメージがある「銀（シルバー）」。高齢者を表す言葉として定着した由来は何でしょうか？',
        answers: [
          '銀座',
          '優先席',
          '銀歯',
          '白髪'
        ],
        correct: '優先席'
      }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;





const $button = document.getElementsByTagName('button');
const buttonLength = $button.length



//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  //次の問題に進むための命令
  quizIndex++;
  if (quizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setupQuiz();
  }　else {
    //問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
