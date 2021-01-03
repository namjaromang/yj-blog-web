import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoInput.module.scss';

const cx = classNames.bind(styles);

interface Props {
    value: string;
    setInput: (value: string) => void;
    onInsert: (value: string) => void;
}

const TodoInput: React.FC<Props> = ({ value, setInput, onInsert }) => {

    // 이렇게 코딩했을 떄 발생하는 문제점?
    const handleOnChange = (e: React.SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement;
        setInput(value);
    };

    const haldeOnKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onInsert(value);
            setInput('');
        }
    };

    const handleOnClick = () => {
        onInsert(value);
        setInput('');
    };

    return (
        <div className={cx('todo-input')}>
            <input
                value={value}
                onChange={handleOnChange}
                onKeyPress={haldeOnKeyPress}
            />
            <div
                className={cx('todo-input')}
                onClick={handleOnClick}
            >추가</div>
        </div>
    );
};

export default TodoInput;
