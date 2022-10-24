const recursiveRemap = require("..")

const object = {
  pcpEngagementMetrics: {
    calledAtLeastOnceByRole: {
      others: {
        sum: {
          referralNurseCoordinator: 0
        }
      }
    }
  }
}

const MAP = {
  pcpEngagementMetrics: {
    calledAtLeastOnceByRole: [
      {
        others: {
          sum: {
            referralNurseCoordinator: "referralCareCoordinator"
          }
        }
      },
      {
        others: "otherNonClinicalStaff"
      }
    ]
  }
}

console.dir(object, { depth: null })

const remappedObject = recursiveRemap(object, MAP)

console.dir(remappedObject, { depth: null })

