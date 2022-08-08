import PropTypes from "prop-types";

const newMessage = 'Francisco';
const obj = { 
  title: 'Hola',
  message: 'Mundo cruel'
}

export const App = ({title, subTitle}) => {

  return (
    <>
      <h1>{ title }</h1>
      <code>{ JSON.stringify(obj) }</code>
      <p>{ subTitle }</p>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}

App.defaultProps = {
  title: 'No Hay titulo',
  subTitle: 32
}