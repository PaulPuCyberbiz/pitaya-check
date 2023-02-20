import React from 'react';
import { NavLink } from 'react-router-dom';

import flexStyles from '@src/assets/stylesheets/pitayas/PitayaFlex.module.scss';
import styles from '@src/assets/stylesheets/pitayas/PitayaTabs.module.scss';
import { useHistory } from 'react-router';

export interface LinkObj {
  name: string;
  link: string;
  realLink?: boolean;
}

export interface PitayaTabsProps {
  title?: string;
  links: LinkObj[];
}

interface TabLinkProps {
  linkObj: LinkObj;
}

function TabLink(props: TabLinkProps) {
  const { linkObj } = props;
  const { name, link, realLink = false } = linkObj;
  const history = useHistory();

  if (realLink) {
    const href = history.createHref({ pathname: link });
    return <a href={href}>{name}</a>;
  }

  return (
    <NavLink exact={true} to={link}>
      {name}
    </NavLink>
  );
}

const PitayaTabs = (props: PitayaTabsProps) => {
  const { title } = props;
  return (
    <div className={styles.pitayaTabs}>
      {title && (
        <section className={flexStyles['pitaya-flex']}>
          <h2 className={styles.pageTitle}>{props.title}</h2>
        </section>
      )}
      <ul className={styles.tabBar}>
        {props.links.map(link => (
          <li key={link.name}>
            <TabLink linkObj={link} />
          </li>
        ))}
      </ul>
      <hr className={styles.tabBarBottomLine} />
    </div>
  );
};
export default PitayaTabs;
