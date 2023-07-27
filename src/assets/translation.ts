import { L10n, setCulture } from '@syncfusion/ej2-base';

setCulture('pt-BR');

L10n.load({
  'pt-BR': {
    'grid': {
      'EmptyRecord': 'Nenhum registro exibido',
      'GroupDropArea': 'Arraste um cabeçalho de coluna aqui para agrupar pela sua coluna',
      'UnGroup': 'Clique aqui para desfazer a agrupação',
      'EmptyDataSourceError': 'DataSource não deve estar vazio na primeira carga, pois as colunas são geradas automaticamente a partir do dataSource na grade de colunas',
      'Item': 'Item',
      'Items': 'Itens',
      'Edit': 'Editar',
      'Delete': 'Deletar',
      'Update': 'Atualizar',
      'Cancel': 'Cancelar',
      'EditOperationAlert': 'Nenhum registro selecionado para operação de edição',
      'DeleteOperationAlert': 'Nenhuma registro selecionado para operação de exclusão',
    },
    'pager':{
      'currentPageInfo': '{0} de {1} páginas',
      'totalItemsInfo': '({0} itens)',
      'firstPageTooltip': 'Para a primeira página',
      'lastPageTooltip': 'Para a última página',
      'nextPageTooltip': 'Para a próxima página',
      'previousPageTooltip': 'Voltar para a página anterior',
      'nextPagerTooltip': 'Para a próxima página',
      'previousPagerTooltip': 'Para a página anterior'
    },
  }
});
