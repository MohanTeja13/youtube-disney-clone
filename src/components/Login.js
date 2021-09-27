import styled from "styled-components"

const Login = (props) => {
    return (
        <Conatiner>
            <Content>
                <CTA>
                    <CTALogoOne src = "/images/cta-logo-one.svg" />
                    <Signup>GET ALL THERE</Signup>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee
                        with a Disney+ subscription. As of 03/26/21, the price of Disney+
                        and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src = "/images/cta-logo-two.png" />
                </CTA>
                <BgImage />
            </Content>
        </Conatiner>
        );
}

const BgImage = styled.div`
    height: 100%;
    back-ground-position: top;
    background-image: url(/images/login-background.jpg);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

let Conatiner = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

let Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction :column;
    align-items: center;
    justify-content: center;
    padding: 80px 40px;
    height: 100%;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px
    height: 300px;
    width: 600px;
    display: block;
`;

const Signup = styled.button`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font_size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`;

export default Login;