import { Container } from "react-bootstrap"

export const Banner = ()=>{
    return (
        <section className="banner" id="home">
            <Container>
                <row className="align-items-center">
                    <col xs={12} md={6} xl={7}>
                    <h1>{"Hi I am Hacker"} <span className="wrap">I am a Developer</span></h1>
                       
                       
                    </col>
                </row>
            </Container>
        </section>
    )
}