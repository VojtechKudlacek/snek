import React, { FunctionComponent, useCallback, useMemo } from 'react';
import socketManager from 'services/SocketManager';
import Loading from 'components/Loading';
import Button from 'components/Button';

export interface Properties {
	socketConnecting: boolean;
	socketError: string;
	playerName: string;
}

const Overlay: FunctionComponent<Properties> = (props) => {
	const { playerName, socketConnecting, socketError, children } = props;

	const reconnect = useCallback(() => socketManager.reconnect(), []);

	const content = useMemo(() => {
		if (socketConnecting) {
			return <Loading />;
		} else if (socketError) {
			return (
				<div className="socket-fail">
					<div className="socket-error">{socketError}</div>
					<div className="socket-reconnect">
						<Button onClick={reconnect}>Reconnect</Button>
					</div>
				</div>
			);
		}
		return children;
	}, [socketConnecting, socketError]);

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
