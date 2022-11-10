import {Component} from '@angular/core';
import {faBookmark, faBookOpen, faList, faPenNib} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
  faBookOpen = faBookOpen;
  faPenNib = faPenNib;
  faBookmark = faBookmark;
  faList = faList;
}
