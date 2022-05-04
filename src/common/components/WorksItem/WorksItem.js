import React from 'react';
import Text from '../Text';
import Image from '../Image';

import styles from './styles/_works-item.module.scss';

const WorkItem = ({worksItemData}) => {
  return (
    <article className={styles['works-item']} key={worksItemData.id}>
      <Image
        imageName={worksItemData.image}
        className={styles['works-item__image']}
      />
      <div className={styles['works-item__info']}>
        <Text heading2 className={styles['works-item__title']}>
          {worksItemData.title}
        </Text>
        <div className={styles['works-item__types-block']}>
          <Text color='white' className={styles['works-item__year']}>{worksItemData.year}</Text>
          |
          <Text className={styles['works-item__type']}>{worksItemData.title}</Text>
        </div>
        <Text className={styles['works-item__description']}>{worksItemData.description}</Text>
      </div>
    </article>
  );
};

export default WorkItem;