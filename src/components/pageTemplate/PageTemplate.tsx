import React, {FunctionComponent} from 'react';





interface Props {
}

const PageTemplate: FunctionComponent<Props> = ({ children }) => {
    return (
        <PageTemplate>
            <h1>일정 관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </PageTemplate>
    );
};

const PageTemplate = styled.div`
    // some styles
`

export default PageTemplate;
