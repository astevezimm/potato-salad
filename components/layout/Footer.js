import classes from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <h4>
                <a href="https://github.com/astevezimm/potato-salad" target="_blank">Source code for this site available here!</a>
            </h4>
            <h4>
                <a href="https://andrew-zimmerman.herokuapp.com/" target="_blank">And here's my main website!</a>
            </h4>
            <p>Andrew Zimmerman Copyright © {new Date().getFullYear()}</p>
        </footer>
    );
}