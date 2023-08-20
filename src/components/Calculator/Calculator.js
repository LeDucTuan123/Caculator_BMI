import classNames from 'classnames/bind';
import Style from './Calculator.module.scss';

import {useState, useRef} from 'react';

const cx = classNames.bind(Style);

const Calculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [message, setMessage] = useState('');
    const [bmi, setBmi] = useState('');

    const ref = useRef();

    const handleClickBmi = () => {
        const heights = height * height;
        const result = weight / heights;
        setBmi(result.toFixed(2));
        if (result <= 18.5) {
            setMessage('gầy, Thiếu cân');
        } else if (result > 18.5 && result <= 24.9) {
            setMessage('Cân đối, dáng chuẩn');
        } else if (result > 24.9 && result <= 29.9) {
            setMessage('Thừa cân');
        } else if (result > 29.9 && result <= 34) {
            setMessage('Béo phì');
        } else {
            setMessage('Béo phì nguy hiểm');
        }
    };

    const reload = () => {
        setWeight('');
        setHeight('');
        setMessage('');
        setBmi('');
        ref.current.focus();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content-calculator')}>
                    <h2 className={cx('title')}>BMI Calculator</h2>

                    <div>
                        <label>Cân nặng: </label>
                        <input
                            className={cx('input')}
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="vd: 55"
                            ref={ref}
                        />
                    </div>
                    <div>
                        <label>Chiều cao: </label>
                        <input
                            className={cx('input')}
                            type="number"
                            value={height}
                            placeholder="vd: 1.7"
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className={cx('btn')} onClick={handleClickBmi}>
                            Submit
                        </button>
                        <button className={cx('btn-outline')} onClick={reload}>
                            Reload
                        </button>
                    </div>

                    <div className={cx('title')}>
                        <h3>BMI của bạn là: {bmi} </h3>
                        <p className={cx('title-message')}>{message}</p>
                    </div>
                    <div className={cx('img-container')}>
                        <img className={cx('image')} src="" alt="" />
                    </div>
                </div>
                <div className={cx('content')}>
                    <h2 className={cx('title')}>Chỉ số BMI</h2>
                    <ul>
                        <li className={cx('content-title')}>gầy, Thiếu cân {'<= 18.5'} </li>
                        <li className={cx('content-title')}>{'18.5< Cân đối < 24.9'}</li>
                        <li className={cx('content-title')}>{'24.9 < Thừa cân < 29.9'}</li>
                        <li className={cx('content-title')}>{'29.9 < Béo phì < 34'}</li>
                        <li className={cx('content-title')}>Béo phì nguy hiểm{'> 34 '}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
