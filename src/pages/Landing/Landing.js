import React, { useMemo } from 'react';
import { RoutePath } from '../../common/constants/RoutePath';
import { MyWorks } from '../../common/constants';
import { Text, Image, CustomLink } from '../../common/components';

import styles from './styles/_landing.module.scss';

const Landing = () => {
  const renderMyWorks = useMemo(() => {
    return(
      MyWorks.map((work) => (
        <article className={styles['landing__works-item']} key={work.id}>
          <Image
            imageName={work.image}
            className={styles['landing__works-item-image']}
          />
          <div className={styles['landing__works-item-info']}>
            <Text heading2 className={styles['landing__works-item-title']}>
              {work.title}
            </Text>
            <div className={styles['landing__works-item-types-block']}>
              <Text color='white' className={styles['landing__works-item-year']}>{work.year}</Text>
              |
              <Text className={styles['landing__works-item-type']}>{work.title}</Text>
            </div>
            <Text className={styles['landing__works-item-description']}>{work.description}</Text>
          </div>
        </article>
      ))
    )
  }, MyWorks);
  return (
    <>
      <div className={styles.landing__top}>
        <Image
          imageName="author"
          className={styles['landing__top-image']}
        />
        <div className={styles['landing__top-my-info']}>
          <Text heading1 className={styles['landing__top-title']}>
            Hi, I am John, Creative Technologist
          </Text>
          <Text className={styles['landing__top-my-description']}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Text>
          <CustomLink
            label="Download resume"
            to={RoutePath.Landing}
            isLikeButton
          />
        </div>
      </div>
      <div className={styles['landing__works-list']}>
        {renderMyWorks}
      </div>
      <div className={styles['landing__contacts']}></div>
    </>
  );
};

export default Landing;