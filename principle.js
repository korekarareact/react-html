var PrincipleBox = React.createClass({
  render : function() {
    return (
      <div className="principleBox">
        <p className="demo-block-title">本站設計原理</p>
        <PrincipleList data={this.props.data} />
      </div>
    )
  }
});

var PrincipleList = React.createClass({
  render : function() {
    var principleNodes = this.props.data.map(function (principle){
      return (
        <Principle key={principle.id} principletitle={principle.principletitle} principletext={principle.principletext}>
        </Principle>
      );
    });
    return (
      <div className="principleList">
        {principleNodes}
      </div>
    );
  }
});

var Principle = React.createClass({
  render : function() {
    return (
      <div className="principle">
        <p className="principleTitle">
          {this.props.principletitle}
        </p>
        <p className="principleText">
          {this.props.principletext}
        </p>
      </div>
    )
  }
});

var data = [
  {id: 1, principletitle: "行動裝置體驗", principletext: "根據在前公司擔任網站站主時，觀察到行動裝置的使用者已經超過桌機的使用者，所以在設計網站時，各個component都遵循Reasponsive Web Design的原則，讓使用者在不同裝置下都能有舒適的體驗。"},
  {id: 2, principletitle: "ReactJS+Bootstrap", principletext: "本站是由ReactJS與Bootstrap來製作，有別於以往直接以html寫完一個頁面,讓各個元件獨立在js檔能使管理與維護更加方便。在需要強調重點的部分，我選擇以色彩感強烈的Bootstrap按鈕來製作，達到吸引使用者目光的目標。"},
  {id: 3, principletitle: "利用prop來擷取數據", principletext: "直接在js檔中加入JSON格式的變量，用來儲存文章，再利用props去擷取，可以輕鬆地增加或刪減內文。"},
  {id: 4, principletitle: "利用state來控制按鈕", principletext: "在「技能」的部分，我使用了state來控制按鈕，隨著按鈕的開關去改變其class，搭配css做出互動。"}
];




ReactDOM.render(
  <PrincipleBox data={data} />,
  document.getElementById('principle')
);
