import View from './View.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2
import previewView from './previewView.js';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `We could not find recipes. Please try another one!`;
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
