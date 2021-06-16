import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Demo01 from "../views/demo01";
import Demo02Component from "../views/demo02/component";
import Demo02 from "../views/demo02";
import Demo02Final from "../views/demo02/final";
import Demo03 from "../views/demo03";
import Demo03Final from "../views/demo03/final";
import Demo04Final from "../views/demo04/final";
import Demo04 from "../views/demo04";
import Demo05 from "../views/demo05";
import Demo05Final from "../views/demo05/final";
import Demo06 from "../views/demo06";

const Routes = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Router>
                <Switch>
                    <Route path="/demo-01" exact component={Demo01} />
                    <Route path="/demo-02/start" component={Demo02Component} />
                    <Route path="/demo-02" exact component={Demo02} />
                    <Route path="/demo-02/final" component={Demo02Final} />
                    <Route path="/demo-03" exact component={Demo03} />
                    <Route path="/demo-03/final" component={Demo03Final} />
                    <Route path="/demo-04" exact component={Demo04} />
                    <Route path="/demo-04/final" component={Demo04Final} />
                    <Route path="/demo-05" exact component={Demo05} />
                    <Route path="/demo-05/final" component={Demo05Final} />
                    <Route path="/demo-06" exact component={Demo06} />
                    {/* <Route path="/demo-06/final" component={Demo06Final} /> */}
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "stretch",
        justifyItems: "stretch",
        height: "100vh",
        width: "100vw",
    },
}));
