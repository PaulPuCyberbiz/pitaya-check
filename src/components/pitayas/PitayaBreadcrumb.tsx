import React from 'react';
import { Link } from 'react-router-dom';
import History from 'history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '@src/assets/stylesheets/pitayas/PitayaBreadcrumb.module.scss';
import { useHistory } from 'react-router';
import classNames from 'classnames';
export interface PitayaBreadcrumbItem {
  label: string;
  link?: string | History.LocationDescriptorObject;
  realLink?: boolean;
}

interface PitayaBreadcrumbLinkProps {
  item: PitayaBreadcrumbItem;
}

const PitayaBreadcrumbLink = ({ item }: PitayaBreadcrumbLinkProps) => {
  const history = useHistory();
  const { label, link, realLink } = item;

  if (!link) {
    return <span>{label}</span>;
  }
  if (realLink) {
    const location = typeof link === 'string' ? { pathname: link } : link;
    const href = history.createHref(location);
    return <a href={href}>{label}</a>;
  }

  return <Link to={link}>{label}</Link>;
};

export interface PitayaBreadcrumbProps {
  className?: string;
  items: PitayaBreadcrumbItem[];
}

const PitayaBreadcrumb = (props: PitayaBreadcrumbProps) => {
  const { className, items } = props;
  const itemsLen = items.length;
  return (
    <ul className={classNames(styles.pitayaBreadcrumb, className)}>
      {props.items.map((item, index) => {
        const isLast = itemsLen === index + 1;
        return (
          <li
            key={index}
            className={isLast ? 'breadcrumb_item active' : 'breadcrumb_item'}
          >
            <PitayaBreadcrumbLink item={item} />
            {!isLast && <FontAwesomeIcon icon={faAngleRight} />}
          </li>
        );
      })}
    </ul>
  );
};

export default PitayaBreadcrumb;
