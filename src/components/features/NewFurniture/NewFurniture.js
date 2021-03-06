import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import Swipeable from '../../layout/Swipeable/Swipeable';
import ProductBoxContainer from '../../common/ProductBox/ProductBoxContainer.js';
import { mobile, desktop, tablet } from '../../../redux/modeRedux.js';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    activePageStyle: styles.fadeIn,
  };

  handlePageChange(newPage) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activePage: newPage.index, activePageStyle: styles.fadeIn });
    }, 1000);
  }

  handleCategoryChange(newCategory) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory, activePageStyle: styles.fadeIn });
    }, 1000);
  }
  setChunk() {
    let chunk;
    if (this.props.mode === desktop) {
      chunk = 8;
    } else if (this.props.mode === tablet) {
      chunk = 2;
    } else if (this.props.mode === mobile) {
      chunk = 1;
    }
    return chunk;
  }
  splitToChunks(array) {
    const result = [];
    const chunk = this.setChunk();
    for (let i = 0 * 8, j = array.length; i < j; i += chunk) {
      let temparray = array.slice(i, i + chunk);
      result.push(temparray);
    }
    return result;
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory } = this.state;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className={'row no-gutters ' + styles.headerWidth}>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => (
                          this.handleCategoryChange(item.id),
                          this.setState({ activePage: 0 })
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Swipeable
            containerClassName={styles.swipeWrap}
            rightAction={this.handlePageChange.bind(this)}
            leftAction={this.handlePageChange.bind(this)}
          >
            {this.splitToChunks(categoryProducts).map(element =>
              element.map(product => (
                <div key={product.id} className='col-3'>
                  <ProductBoxContainer {...product} />
                </div>
              ))
            )}
          </Swipeable>
        </div>
      </div>
    );
  }
}
NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  mode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
