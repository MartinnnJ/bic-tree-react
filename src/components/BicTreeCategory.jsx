import { useState } from 'react';
import BicTreeSubCategory from './BicTreeSubCategory';
import DropDownArrow from '@assets/main_drop_down_arrow.svg';
import initData from '@/data/init.json';
import styles from './BicTreeCategory.module.scss';

export default function BicTreeCategory({ slug, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const categoryClickHandler = () => {
    setIsOpen(prevState => !prevState);
  }

  const dropDownArrowStyles = `
    ${styles.category__arrow}
    ${isOpen ? 'rotate' : undefined}
  `;

  const hierarchyData = initData['bicHierarchy'];

  const categoryContentOutput = isOpen ? (
    <div className={styles.category__content}>
      {hierarchyData.map(subCategory => {
        return (
          <BicTreeSubCategory
            key={subCategory.id}
            id={subCategory.id}
            slug={subCategory.slug}
            title={subCategory.title}
            items={subCategory.children}
          />
        )
      })}
    </div>
  ) : (
    null
  );

  return (
    <>
      <div
        className={styles.category}
        data-slug={slug}
        onClick={categoryClickHandler}
      >
        <h2 className={styles.category__title}>
          {title}
        </h2>
        <img
          className={dropDownArrowStyles}
          src={DropDownArrow}
          alt="drop-down-arrow"
        />
      </div>
      {categoryContentOutput}
    </>
  )
}