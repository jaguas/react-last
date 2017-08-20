import React from 'react'
import { Route, Switch } from 'react-router-dom';

import BlogPage from './pages/blog';
import PicturePage from './pages/picture';
import VideoPage from './pages/video';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={BlogPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/picture" component={PicturePage} />
            <Route path="/video" component={VideoPage} />
        </Switch>
    </main>
)

export default Main