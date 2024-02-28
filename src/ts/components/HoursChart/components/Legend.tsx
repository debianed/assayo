import React from 'react';
import { useTranslation } from 'react-i18next';

import style from '../styles/legend.module.scss';

function Legend(): React.ReactElement | null {
  const { t } = useTranslation();
  return (
    <div className={style.legend}>
      <div className={style.legend_item}>
        <div className={style.legend_work}></div>
        <div className={style.legend_title}>
          {t('uiKit.hoursChart.work')}
        </div>
      </div>
      <div className={style.legend_item}>
        <div className={style.legend_weekend}></div>
        <div className={style.legend_title}>
          {t('uiKit.hoursChart.weekend')}
        </div>
      </div>
      <div className={style.legend_item}>
        <div className={style.legend_count}>
          42
        </div>
        <div className={style.legend_title}>
          {t('uiKit.hoursChart.days')}
        </div>
      </div>
    </div>
  );
}

export default Legend;
