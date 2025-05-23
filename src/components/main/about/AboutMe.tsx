import StyledAboutMe from "./StyledAboutMe";

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <div className="container">
                <div className="image">
                    <img src="images/main/aboutme.png" alt="" />
                </div>
                <div className="container">
                    <div className="texts">
                        <h1 className="title">Nothing is impossible</h1>
                        <div className="text">
                            <p>뭐든지 도전하는 <b>도전정신</b>과 하나하나의 집중하는 <b>섬세함</b>으로</p>
                            <p>앞으로 나아가는 개발자 신민석입니다.</p>
                        </div>
                    </div>
                    <div className="statistics">

                    </div>
                </div>
            </div>
        </StyledAboutMe>      
    );
}
export default AboutMe;