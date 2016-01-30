var SkillCategoryRow = React.createClass ({
    render :  function (){
        return  (
          <div className="skill-categoryrow">
            {this.props.category}
          </div>
        );
    }
});

var SkillRow = React.createClass ({
    getInitialState: function() {
      return {switch: false};
    },
    onClick: function() {
      this.setState({switch: !this.state.switch});
    },
    render : function (){
      var variant;
      if(this.state.switch){
        variant = 'transition on';
      } else {
        variant = 'transition off';
      }
      var Button = ReactBootstrap.Button;
      const buttonInstance = (
          <div>
            <Button className="skillname" bsStyle={this.props.skill.bstype} onClick={this.onClick}>
              {this.props.skill.program}
            </Button>
            <div className={variant}>{this.props.skill.text}</div>
          </div>

      );
      return (
          <div>{buttonInstance}</div>
      );
    }
});

var SkillArea = React.createClass ({
    render : function () {
      var rows= [];
      var lastCategory = null;
      this.props.skills.forEach(function(skill){
        if (skill.category !== lastCategory){
          rows.push(<SkillCategoryRow category={skill.category} key={skill.category} />);
        }
        rows.push(<SkillRow skill={skill} key={skill.program} />);
        lastCategory = skill.category;
      });
      return (
        <div>
          {rows}
        </div>
      );
    }
});

var FinalSkillBox = React.createClass({
  render: function(){
    return (
      <div className="skill-box">
        <p className="skill-box-title">技能</p>
        <SkillArea skills={this.props.skills} />
      </div>
    );
  }
});

var SKILLS = [
  {category: 'Programming Languages', program: 'ReactJS', bstype: 'info', text: '第一個學習的框架，接下來會繼續去學前輩們很推薦的redux，以及現在也很熱門的AngularJS。'},
  {category: 'Programming Languages', program: 'HTML5', bstype: 'danger', text: '在ReactJS下我是利用HTML語法來撰寫，再利用browser.js轉換成babel，所以在js檔內還是隨處可見HTML語法。'},
  {category: 'Programming Languages', program: 'CSS3', bstype: 'success', text: '不論是在網頁的文字或圖像展現，或是RWD的配置，CSS都扮演著舉足輕重的角色。'},
  {category: 'Programming Languages', program: 'javascript', bstype: 'primary', text: 'javascrip在ReactJS框架下也是必要的，像是在數據的擷取，或是開關的製作，都用需要用的javascript'},
  {category: 'Programming Languages', program: 'jQuery', bstype: 'primary', text: 'React其實是不太依賴jQuery的，所以也沒有jQuery的CDN，但是因為我在前幾個作品中都是使用jQuery來製作網頁互動與資料的擷取，對其也是有一定程度的瞭解。'},
  {category: 'Google App', program: 'Spreadsheet', bstype: 'success', text: '在前幾個作品中，是利用Spreadsheet來作為資料庫，再利用API反映到網頁上，Spreadsheet雖然方便好用，但是其安全性是趨近於0的，不能放機密性高的資料。'},
  {category: 'Google App', program: 'Analytics', bstype: 'warning', text: '以google分析來偵測網頁的瀏覽率與使用者行為，讓行政方針隨著數據而改變，可以減少走冤望路的風險。'},
  {category: 'Google App', program: 'Trend', bstype: 'primary', text: '在網站設置前，可以先利用Trend來進行關鍵字調查，來決定網頁的Title，對於SEO有很大的幫助。'},
  {category: 'Google App', program: 'Drive', bstype: 'primary', text: '廣為人知的雲端空間，使用起來也相當容易，不論是當圖床或是當資料庫，都是不錯的選擇，但其容量有限制。'},
  {category: 'Language', program: '中文', bstype: 'success', text: '母語，聽說讀寫都沒問題。'},
  {category: 'Language', program: '日本語', bstype: 'danger', text: '聽：50%，說：30%，讀：70%，寫：60%'},
  {category: 'Language', program: 'English', bstype: 'info', text: '聽：60%，說：40%，讀：60%，寫：60%'},
  {category: 'Microsoft Office', program: 'Excel', bstype: 'success', text: '雖然很久沒使用，但是因為google Spreadsheet與其十分相似，所以也不陌生。'},
  {category: 'Microsoft Office', program: 'PowerPoint', bstype: 'danger', text: '大學時期做報告必備的技能之一，沒有PowerPoint是沒辦法畢業的。'},
  {category: 'Microsoft Office', program: 'Word', bstype: 'primary', text: '最基本的文書軟體工具，不敢說精通，但是碩士論文就是以Word來製作的(非常不好用)。'},
];


ReactDOM.render(
  <FinalSkillBox skills={SKILLS} />,
  document.getElementById('skill')
);
