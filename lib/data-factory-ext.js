'use strict'

const DataFactory = require('rdf-data-model')
const Dataset = require('rdf-dataset-simple')

class DataFactoryExt extends DataFactory {
  static graph (quads) {
    let dataset = new DataFactoryExt.defaults.Dataset()

    if (quads) {
      quads.forEach((quad) => {
        dataset.add(DataFactoryExt.quad(quad.subject, quad.predicate, quad.object))
      })
    }

    return dataset
  }

  static dataset (quads) {
    let dataset = new DataFactoryExt.defaults.Dataset()

    if (quads) {
      dataset.addAll(quads)
    }

    return dataset
  }
}

DataFactoryExt.defaults = {
  Dataset: Dataset.bind(null, DataFactoryExt)
}

module.exports = DataFactoryExt