import { FunctionalComponent, h } from 'preact';
import style from './style.css';
import Test from './test.component';

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <Test>
                <h1>Home</h1>
                <p>This is the Home component.</p>
            </Test>
        </div>
    );
};

export default Home;
