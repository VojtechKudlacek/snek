import Overlay, { Properties } from './Overlay';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectConnected, selectLoading, selectError } from 'store/selectors/socket';
import { selectName } from 'store/selectors/player';

const mapStateToProps = createStructuredSelector<StoreState, Properties>({
	socketConnecting: selectLoading,
	socketConnected: selectConnected,
	socketError: selectError,
	playerName: selectName,
});

export default connect(mapStateToProps)(Overlay);
