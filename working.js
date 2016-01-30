var DoprBannar = React.createClass({
  render:function(){
    return (
        <img  className="doprbannar" src="src/dopr.png" />
    );
  }
});

var During = React.createClass({
  render:function(){
    return (
      <div className="during">
        <p>2015.2</p>
        <p>|</p>
        <p>2015.10</p>
      </div>
    );
  }
});

var Experiment = React.createClass({
  render:function(){
    return (
      <div className="experimenttext">
        <p>2015年2月至2015年10月，任職<b>株式會社ゲーム攻略完全図鑑</b>，擔任寫手。</p>
        <p>主要工作項目：
          <li>初期：文章翻譯，熟悉應用程式</li>
          <li>中期：新企劃製作，資料庫處理</li>
          <li>後期：網站SEO優化，撰寫API來反映資料至網站，規劃新網站架構並於一週內完成</li>
        </p>
        <p>在擔任站主時，同時在線人數最高達5000人，單日瀏覽量於週末時也會突破百萬。</p>
      </div>
    );
  }
});

var WorkingExperiment = React.createClass({
  render:function(){
    return (
      <div className="workingexperiment">
        <p className="work-title">工作經驗</p>
        <DoprBannar />
        <During />
        <Experiment />
      </div>
    );
  }
});


ReactDOM.render(
  <WorkingExperiment />,
  document.getElementById('work')
);
