import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
