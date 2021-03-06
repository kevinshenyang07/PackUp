const indexLeftWidth = '18%';
const indexRightWidth = '82%';
const $background = '#F5F5F1';

const styles = {

  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    minWidth: 1000,
    minHeight: '100vh',
  },
  loading: {
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
    padding: 40,
  },
  main: {
    width: indexRightWidth,
    height: 'auto',
    paddingBottom: '150px'
  },
  filterTop : {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 0px 0px 45px',
  },
  filterLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: indexLeftWidth,
    minWidth: 140,
    padding: 0,
    paddingBottom: '150px',
  },
  gridList: {
    overflowY: 'hidden',
    margin: '2% 8% 2% 3%',
    width: 'inherit',
    height: 'auto',
  },
  gridTileTitle: {
    paddingRight: 10,
  },
  radioButton: {
    margin: 20,
  },
  toggle: {
    margin: '20px 0px 20px 16px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '70%',
  },
  checkbox: {
    margin: '0px 0px 8px 16px'
  },
  checkboxIcon: {
    marginRight: 6,
  },
  radioBtn: {
    margin: '0px 0px 8px 16px',
  },
  radioBtnIcon: {
    marginRight: 6,
  },
  pageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: $background,
    width: '100vw',
  },
  specials: {
    overflow: 'hidden',
  }
};

export default styles;
