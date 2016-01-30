
var PortfolioBox = React.createClass({
  render:function(){
    return (
      <div className="portfolioBox">
        <p className="portfolio-title">相關連結</p>
        <MonsterStrike />
        <OnePiece />
        <CatBattle />
        <GitAutobiography />
      </div>
    );
  }
});

var MonsterStrike = React.createClass({
  render:function(){
    return (
      <div>
        <a className="portfoliolink" href="http://tw.dopr.net/most">怪物彈珠攻略</a>
        <p className="portfoliotext">於2015年2月至2015年10月擔任此站站主，從初期的翻譯攻略到後期撰寫簡單的程式來反映後端資料至網頁上(首頁的時間表與最新情報)，明確瞭解自己未來想走的路。</p>
      </div>
    );
  }
});

var OnePiece = React.createClass({
  render:function(){
    return (
      <div>
        <a className="portfoliolink" href="http://tw.dopr.net/onepiece">航海王：秘寶巡航攻略</a>
        <p className="portfoliotext">於2015年7月底開始規劃的網站，在一週內邊摸索遊戲，邊建構網頁架構，再來將各個項目依重要性排序，並分配工作項目給其他同事，比起怪物彈珠網站更有挑戰性。</p>
      </div>
    );
  }
});

var CatBattle = React.createClass({
  render:function(){
    return (
      <div>
        <a className="portfoliolink" href="http://www.korekara.url.tw/catbattle/index.html">貓咪大戰爭</a>
        <p className="portfoliotext">第一個自己製作的網站。以SpreadSheet為資料庫，HTML+CSS來架設網站，並以jQuery來取得後端資料庫的資料反映至前端。</p>
      </div>
    );
  }
});

var GitAutobiography = React.createClass({
  render:function(){
    return (
      <div>
        <a className="portfoliolink" href="https://github.com/korekarareact/react-html">本網站之GitHub</a>
        <p className="portfoliotext">本網站所有的程式碼都收錄在GitHub中。</p>
      </div>
    );
  }
});





ReactDOM.render(
  <PortfolioBox />,
  document.getElementById('portfolio')
);
