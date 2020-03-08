import React from "react";
import { Container, Row, Col } from "react-materialize";
import { Parallax, Background } from 'react-parallax';


function ParallaxContainer() {

    //useEffect(() => {
    //document.querySelector(".parallax");
    //var instances = Parallax.init();
    //});

    return (
        <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
                <Container>
                    <h1 className="header center teal-text text-lighten-2">A-query-um</h1>
                    <Row className="center">
                        <Col>
                            <h5 className="s12 light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <div className="parallax">
                <img src="./images/textures/aqua_orange_fish.jpg" />
            </div> */}
            <Parallax
                bgImage={'./images/textures/aqua_orange_fish.png'}
                bgImageAlt="the cat"
                strength={600}
            >
                <div style={{ height: 600 }} />
            </Parallax>
            <p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consequatur reprehenderit perferendis hic non inventore error sint distinctio neque repudiandae. Aspernatur est accusantium quae possimus pariatur quasi delectus voluptatibus odit.</span>
                <span>Voluptatem earum nemo omnis alias consequatur dignissimos autem laboriosam in, odio totam amet magnam ratione praesentium molestias non itaque error impedit debitis! Qui consequatur fuga quia neque mollitia eius aspernatur.</span>
                <span>Impedit saepe sint hic iste cumque molestiae sit quaerat quia, modi magnam nobis aliquam, esse, mollitia libero deserunt commodi cupiditate quisquam illum itaque obcaecati provident unde dicta quidem! Vel, similique.</span>
                <span>Quidem ex obcaecati, illo repellendus dicta minima modi reiciendis repudiandae eaque error, dignissimos aut pariatur rem tenetur optio. Officiis libero ea aliquam tempora culpa minima illo modi dolores, saepe voluptatum.</span>
                <span>Eaque pariatur totam facilis beatae magnam iusto tempore aut consectetur necessitatibus odit, laboriosam et quae hic distinctio suscipit quis dolore, ipsam excepturi. Ipsa ipsum sint quaerat magni illo dolorum voluptatem?</span>
            </p>
        </div>
    );
}

export default ParallaxContainer;