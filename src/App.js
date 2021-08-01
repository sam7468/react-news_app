import logo from './logo.svg';
import './App.css';
import ArticleOne from './ArticleOne'
import ArticleTwo from './ArticleTwo'
import ArticleThree from './ArticleThree'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './mystyles.css'
function App() {
  return (
    <div className="all">
      <ArticleOne/>
      <ArticleTwo/>
      <ArticleThree/>
    </div>
  );
}

export default App;
