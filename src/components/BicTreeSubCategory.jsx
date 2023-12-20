import { useState } from 'react';
import TrackLines from '@components/helpers/TrackLines';
import DropDownArrow from '@assets/small_drop_down_arrow.svg';
import styles from './BicTreeSubCategory.module.scss';

export default function BicTreeSubCategory({ slug, id, title, items, isLast }) {
  const [isOpen, setIsOpen] = useState(false);

  const subCategoryClickHandler = () => {
    setIsOpen(prevState => !prevState);
  }

  const dropDownArrowStyles = `
    ${styles.subcategory__arrow}
    ${isOpen ? 'rotate' : undefined}
  `;

  const subCategoryTitleStyles = `
    ${styles.subcategory__title}
    ${(isOpen && items.length > 0) ? 'bold' : undefined}
  `;

  const subCategoryContentOutput = (isOpen && items.length > 0) ? (
    <div className={styles.subcategory__content}>
      {items.map(subCategory => {
        const title = subCategory.title.slice(0, 30);
        const hasChildren = subCategory.children?.length > 0 ? true : false;
        const isLastItemInList = items.length - 1 === items.findIndex(obj => obj.id === subCategory.id);

        return (
          <BicTreeSubCategory
            key={subCategory.id}
            id={subCategory.id}
            slug={subCategory.slug}
            title={title}
            items={hasChildren ? subCategory.children : []}
            isLast={isLastItemInList}
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
        className={styles.subcategory}
        data-slug={slug}
        onClick={subCategoryClickHandler}
      >
        <TrackLines idLength={id.length} isLast={isLast} />
        {items.length > 0 && (
          <img
            className={dropDownArrowStyles}
            src={DropDownArrow}
            alt="drop-down-arrow"
          />
        )}
        <p className={subCategoryTitleStyles}>
          {title}
        </p>
      </div>
      {subCategoryContentOutput}
    </>
  )
}