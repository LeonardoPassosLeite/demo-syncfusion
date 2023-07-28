import { Injectable } from '@angular/core';
import { L10n, setCulture } from '@syncfusion/ej2-base';

@Injectable({
  providedIn: 'root'
})

export class TranslationService {

  constructor() { }

  loadLocalization(): void {
    setCulture('pt-BR');

    L10n.load({
      'pt-BR': {
        'grid': {
          'EmptyRecord': 'Nenhum registro encontrado',
          'True': 'Verdadeiro',
          'False': 'Falso',
          'InvalidFilterMessage': 'Entrada de filtro inválida',
          'GroupDropArea': 'Arraste um cabeçalho de coluna aqui para agrupar sua coluna',
          'UnGroup': 'Clique aqui para desagrupar',
          'Item': 'item',
          'Items': 'itens',
          'FilterButton': 'Filtrar',
          'ClearButton': 'Limpar',
          'StartsWith': 'Começa com',
          'EndsWith': 'Termina com',
          'Contains': 'Contém',
          'Equal': 'Igual',
          'NotEqual': 'Não igual',
          'LessThan': 'Menor que',
          'LessThanOrEqual': 'Menor ou igual a',
          'GreaterThan': 'Maior que',
          'GreaterThanOrEqual': 'Maior ou igual a',
          'ChooseDate': 'Escolha uma data',
          'EnterValue': 'Inserir valor',
          'Copy': 'Copiar',
          'Group': 'Agrupar por esta coluna',
          'Ungroup': 'Desagrupar por esta coluna',
          'autoFitAll': 'Auto ajustar todas as colunas',
          'autoFit': 'Auto ajustar esta coluna',
          'Export': 'Exportar',
          'FirstPage': 'Primeira página',
          'LastPage': 'Última página',
          'NextPage': 'Próxima página',
          'PreviousPage': 'Página anterior',
          'SortAscending': 'Ordenar Ascendente',
          'SortDescending': 'Ordenar Descendente',
          'EditOperationAlert': 'Nenhum registro selecionado para a operação de edição',
          'DeleteOperationAlert': 'Nenhum registro selecionado para a operação de exclusão',
          'SaveButton': 'Salvar',
          'OKButton': 'OK',
          'CancelButton': 'Cancelar',
          'EditFormTitle': 'Detalhes do ',
          'AddFormTitle': 'Adicionar novo registro',
          'BatchSaveConfirm': 'Tem certeza de que deseja salvar as alterações?',
          'BatchSaveLostChanges': 'As alterações não salvas serão perdidas. Tem certeza de que deseja continuar?',
          'CancelEdit': 'Tem certeza de que deseja cancelar as alterações?',
          'ChooseColumns': 'Escolher coluna',
          'SearchColumns': 'colunas de pesquisa',
          'Matchs': 'Nenhuma correspondência encontrada',
        },
        'datepicker': {
          'today': 'Hoje'
        },
        'pager': {
          'currentPageInfo': '{0} de {1} páginas',
          'totalItemsInfo': '({0} itens)',
          'firstPageTooltip': 'Ir para a primeira página',
          'lastPageTooltip': 'Ir para a última página',
          'nextPageTooltip': 'Ir para a próxima página',
          'previousPageTooltip': 'Ir para a página anterior',
          'nextPagerTooltip': 'Ir para o próximo pager',
          'previousPagerTooltip': 'Ir para o pager anterior',
        }
      }
    });
  }
}
