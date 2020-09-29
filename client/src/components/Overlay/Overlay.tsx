import React, { FunctionComponent, useMemo } from 'react';
import Loading from 'components/Loading';

interface Properties {
	socketConnecting: boolean;
	socketConnected: boolean;
	socketError: boolean;
	playerName: string;
}

const Overlay: FunctionComponent<Properties> = (props) => {
	const { playerName, socketConnected, socketConnecting, socketError, children } = props;

	const content = useMemo(() => {
		if (socketConnecting) {
			return <Loading />;
		} else if (!socketConnected && socketError) {
			return <div className="socket-error">{socketError}</div>;
		}
		return children;
	}, [socketConnecting, socketConnected, socketError]);

	return (
		<div className="overlay">
			<div className="top-bar">
				<div className="name">{playerName}</div>
			</div>
			<div className="content">{content}</div>
		</div>
	);
};

export default Overlay;
