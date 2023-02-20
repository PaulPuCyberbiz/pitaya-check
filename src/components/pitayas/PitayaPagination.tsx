import React from 'react';
import styles from '@src/assets/stylesheets/pitayas/PitayaPagination.module.scss';
import PitayaFlex, {
  FlexAlignItems,
  FlexJustify,
} from '@src/components/pitayas/PitayaFlex';
import { useTranslation } from 'react-i18next';

enum btnType {
  next = 'next',
  prev = 'prev',
}

interface ChangePageBtnProps {
  type: btnType;
  onClick: () => void;
}

const ChangePageBtn: React.FC<ChangePageBtnProps> = props => {
  const { type, onClick } = props;

  return <button className={`changePageBtn ${type}`} onClick={onClick} />;
};

enum pageType {
  current = 'current',
  normal = 'normal',
}

interface PageBtnProps {
  type: pageType;
  onClick: () => void;
}

const PageBtn: React.FC<PageBtnProps> = props => {
  const { type, onClick } = props;

  return (
    <a className={`pageBtn ${type}`} onClick={onClick}>
      {props.children}
    </a>
  );
};

const fillArray = (start: number, end: number) => {
  const result = [];
  for (start; start <= end; start++) {
    result.push(start);
  }
  return result;
};

const getPageRange = (
  currentPage: number,
  limit: number,
  totalPages: number,
): number[] => {
  const offset = Math.floor(limit / 2);
  if (totalPages <= limit) {
    return fillArray(1, totalPages);
  }
  if (currentPage + offset >= totalPages) {
    return fillArray(totalPages - limit + 1, totalPages);
  }
  if (currentPage <= offset) {
    return fillArray(1, limit);
  }
  const min = currentPage - offset;
  const max = limit % 2 === 0 ? currentPage + offset - 1 : currentPage + offset;
  return fillArray(min, max);
};

export interface PitayaPaginationProps
  extends Partial<React.HTMLAttributes<HTMLElement>> {
  currentPage: number;
  flexJustify?: FlexJustify;
  hideDescription?: boolean;
  hideOnSinglePage?: boolean;
  limit: number;
  objName?: string;
  totalCount?: number;
  totalPages: number;
  descriptionContent?: (
    currentPage: number,
    totalPages: number,
    totalCount?: number,
  ) => void;
  onPageChange: (currentPage: number) => void;
}

const PitayaPagination = (props: PitayaPaginationProps) => {
  const { t } = useTranslation('Pitaya');

  const {
    currentPage,
    flexJustify,
    hideDescription = false,
    hideOnSinglePage = false,
    limit,
    objName,
    totalCount,
    totalPages,
    descriptionContent,
    onPageChange,
    ...rest
  } = props;

  if (hideOnSinglePage && totalPages <= 1) {
    return null;
  }

  return (
    <PitayaFlex
      className={styles.pitayaPagination}
      flexAlignItems={FlexAlignItems.END}
      flexJustify={flexJustify}
      {...rest}
    >
      {!hideDescription &&
        (descriptionContent ? (
          descriptionContent(currentPage, totalPages, totalCount)
        ) : (
          <p>
            {t('PitayaPagination_description', {
              totalCount,
              objName,
              totalPages,
            })}
          </p>
        ))}
      <PitayaFlex>
        {currentPage > 1 && (
          <ChangePageBtn
            type={btnType.prev}
            onClick={() => onPageChange(currentPage - 1)}
          />
        )}
        {getPageRange(currentPage, limit, totalPages).map((page: number) => {
          return (
            <PageBtn
              key={page}
              type={page === currentPage ? pageType.current : pageType.normal}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PageBtn>
          );
        })}
        {currentPage < totalPages && (
          <ChangePageBtn
            type={btnType.next}
            onClick={() => onPageChange(currentPage + 1)}
          />
        )}
      </PitayaFlex>
    </PitayaFlex>
  );
};

PitayaPagination.defaultProps = {
  limit: 10,
  currentPage: 0,
  totalPages: 0,
};

export default PitayaPagination;
