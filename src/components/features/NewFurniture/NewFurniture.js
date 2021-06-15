import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import Swipeable from '../../layout/Swipeable/Swipeable';
import ProductBoxContainer from '../../common/ProductBox/ProductBoxContainer';


class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    index: 0,
    activePageStyle: styles.fadeIn,
  };

  handlePageChange(newPage) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activePage: newPage, activePageStyle: styles.fadeIn });
    }, 1000);
  }

  handleCategoryChange(newCategory) {
    this.setState({ activePageStyle: styles.fadeOut });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory, activePageStyle: styles.fadeIn });
    }, 1000);
  }
  splitToChunks(array) {
    let result = [];
    const chunk = 8;
    for (let i = 0 * 8, j = array.length; i < j; i += chunk) {
      let temparray = array.slice(i, i + chunk);
      result.push(temparray);
    }
    return result;
  }

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;
    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);
    this.splitToChunks(categoryProducts);
    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
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
                          this.handleCategoryChange(item.id), this.handlePageChange(0)
                        )}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable
            containerClassName={styles.swipeWrap}
            currentValue={activePage}
            parentCallback={this.handlePageChange.bind(this)}
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
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
