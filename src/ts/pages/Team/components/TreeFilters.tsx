import React from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import dataGripStore from 'ts/store/DataGrip';
import UiKitSelect from 'ts/components/UiKit/components/SelectWithButtons';
import UiKitInputNumber from 'ts/components/UiKit/components/InputNumber';

import treeStore from '../store/Tree';
import style from '../styles/filters.module.scss';

const TreeFilters = observer((): React.ReactElement => {
  const { t } = useTranslation();
  const authors = dataGripStore.dataGrip.author.list;
  const options = authors.map((title: string, id: number) => ({ id: id + 1, title }));
  options.unshift({ id: 0, title: t('page.team.tree.filters.all') });

  return (
    <div>
      <UiKitSelect
        title="page.team.tree.filters.author"
        value={treeStore.authorId}
        options={options}
        className={style.tree_filters}
        onChange={(authorId: number) => {
          treeStore.updateFilter('authorId', authorId);
        }}
      />
      <UiKitInputNumber
        title="page.team.tree.filters.commits"
        help="page.team.tree.filters.help"
        value={treeStore.minCommits}
        className={style.tree_filters}
        onChange={(minCommits: number) => {
          treeStore.updateFilter('minCommits', minCommits);
        }}
      />
    </div>
  );
});

export default TreeFilters;
