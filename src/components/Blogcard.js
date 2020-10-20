import React from "react"
import { Container, Row} from 'reactstrap';
import car from '../images/evo.jpg';
import '../styles/blogcard.scss';

const Blogcard = () => {
  return (
    <Container id="cardContainer">
        <img id="postImage" src={car}/>
        <h3 id="postTitle">Some blog post title will be here</h3>
        <span id="postTag" className="tag">Technology</span>
        <span id="authorDate">Posted by name on date</span>
        <p id="postIntro">lorem ipsumWhatever By Gritter97 on Jun 30 2020
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
pulvinar facilisis justo...</p>
        <span id="readmore">READ MORE</span> 
    </Container>

  );
}



export default Blogcard