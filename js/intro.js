var IntroduceBox = React.createClass({
  render : function() {
    return (
      <div className="introduceBox">
        <p className="intro-title">關於我</p>
        <IntroduceList data={this.props.data} />
      </div>
    );
  }
});

var IntroduceList = React.createClass({
  render : function() {
    var introduceNodes = this.props.data.map(function (introduce){
      return (
        <Introduce key={introduce.id} introducetitle={introduce.introducetitle} introducetext={introduce.introducetext}>
        </Introduce>
      );
    });
    return (
      <div className="introduceList">
        {introduceNodes}
        <School />
      </div>
    );
  }
});

var Introduce = React.createClass({
  render : function() {
    return (
        <p className="introduceTitle">
          {this.props.introducetitle}：{this.props.introducetext}
        </p>
    );
  }
});

var School = React.createClass({
  render : function(){
    return (
        <p className="introduceTitle school">學歷：
          <img className="intro-school-img" src="src/education.png" />
          <li className="intro-school">2012~2014  中央大學物理研究所畢業</li>
          <li className="intro-school">2008~2012  中央大學物理系畢業</li>
          <li className="intro-school">2004~2008  國立陽明高級中學畢業</li>
        </p>
    );
  }
});

var data = [
  {id: 1, introducetitle: "姓名", introducetext: "張振耀"},
  {id: 2, introducetitle: "年齡", introducetext: "25"},
  {id: 3, introducetitle: "性別", introducetext: "男"},
  {id: 4, introducetitle: "籍貫", introducetext: "ROC"},
  {id: 5, introducetitle: "兵役", introducetext: "免役"},
  {id: 6, introducetitle: "現居", introducetext: "桃園市桃園區"},
  {id: 7, introducetitle: "Email", introducetext: "changchenyao.inn@gmail.com"}
];




ReactDOM.render(
  <IntroduceBox data={data} />,
  document.getElementById('intro')
);
