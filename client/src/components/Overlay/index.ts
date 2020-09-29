import Overlay from './Overlay';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectConnected, selectLoading, selectError } from 'store/selectors/socket';
import { selectName } from 'store/selectors/player';

// const mapStateToProps = createStructuredSelector({
// 	socketConnecting: selectLoading,
// 	socketConnected: selectConnected,
// 	socketError: selectError,
// 	playerName: selectName,
// });

const mapStateToProps = (state: StoreState) => ({
	socketConnecting: selectLoading(state),
	socketConnected: selectConnected(state),
	socketError: selectError(state),
	playerName: selectName(state),
});

export default connect(mapStateToProps)(Overlay);
