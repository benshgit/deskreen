import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const App: React.FC<Props> = (props: Props) => {
	const { children } = props;
	
	return (
        // 使用自定义深色背景色和文字颜色强制暗黑视觉效果
        // 如果 Blueprint 组件未完全适配，"bp6-dark" 或 "bp5-dark" 类名会辅助其内部组件变成深色主题
		<div 
            className="bp6-dark bp5-dark dark-theme" 
            style={{ 
                minHeight: '100vh', 
                backgroundColor: '#293742', /* 深色背景 */
                color: '#F5F8FA',           /* 浅色文本 */
                margin: 0,
                padding: 0
            }}
        >
			{children}
		</div>
	);
};

export default App;
