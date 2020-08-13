import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export const RouterView = (props) => {
    const routeArr = props.routes.filter(item => item.component)
    const redirectArr = props.routes.filter(item => item.redirect)
    
    return (
        <Switch>
            {
                routeArr.map((item, index) => {
                    if(item.exact){
                        return (
                            <Route exact key={index} path={item.path} render={props => {
                                return <item.component {...props} routes={item.children} key={index}/>
                            }} />
                        )
                    }else{
                        return (
                            <Route key={index} path={item.path} render={props => {
                                return <item.component {...props} routes={item.children} key={index}/>
                            }} />
                        )
                    }
                })
            }
            {
                redirectArr.map((item, index) => {
                    return (
                        <Redirect from="/" to={item.redirect} key={index} />
                    )
                })
            }
        </Switch>
    )
}
