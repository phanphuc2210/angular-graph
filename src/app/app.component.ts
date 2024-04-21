import { Component, OnInit } from '@angular/core';
import { ClusterNode, Edge, Node } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-graph';
  nodes: Node[] = [];
  links: Edge[] = [];
  clusters: ClusterNode[] = []; 
  curve = shape.curveBundle;

  ngOnInit(): void {
    this.nodes = [
      {
        id: 'first',
        label: 'A',
        data: {
          customColor: '#ff0000'
        }
      }, {
        id: 'second',
        label: 'B'
      }, {
        id: 'c1',
        label: 'C1'
      }, {
        id: 'c2',
        label: 'C2'
      }
    ];

    this.links = [
      {
        id: 'a',
        source: 'first',
        target: 'second',
        label: 'is parent of'
      }, {
        id: 'b',
        source: 'first',
        target: 'c1',
        label: 'custom label'
      }, {
        id: 'c',
        source: 'first',
        target: 'c1',
        label: 'custom label'
      }, {
        id: 'd',
        source: 'first',
        target: 'c2',
        label: 'custom label'
      }
    ];

    this.clusters = [
      {
        id: 'third',
        label: 'C',
        childNodeIds: ['c1', 'c2']
      }
    ];
  }
}
