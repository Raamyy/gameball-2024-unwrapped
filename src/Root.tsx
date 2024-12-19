import {Composition} from 'remotion';
import Main, { UserContributionsProps } from './gameball/Main';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="gameball-unwrapped"
				component={Main as React.FC<UserContributionsProps>}
				durationInFrames={919}
				fps={30}
				width={720}
				height={1280}
				defaultProps={{ CurrentUser: "Raamyy" }}
			/>
		</>
	);
};
