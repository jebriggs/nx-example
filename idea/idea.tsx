import React from 'react'

/**
 * A design pattern. Features:
 * separation of concerns: logic separated from presentation
 * reusability: both the hook and the dumb component are re-usable
 * The hook can be used to change the presentation
 * and the dumbcomponent to change the data source
 * type safety via the use of interface
 * This is a controlled components which "as a rule" is a better design
 * Encapsulation.  The hook encapsulates data implementation like a dao would
 * behind a java data repository
 * customization and flexibility.
 */

/**
 * The data the dumb component needs
 * Doesn't necessarily have to be one object
 */
interface DataModel {

}

/**
 * Package of callback
 */
interface ActionModel {

}

/**
 * Implements crud operations, read and write of data, and manages
 * state at different scopes
 * React query or any other implementation should be hidden inside
 * the smart hook
 */
const useSmartComponentHook = ():any /* todo:replace with type */ => {
  return {
    // doSomething
    // get something and return promise
  }
}


/**
 * Callbacks and data model
 * This is basically a controlled component. Should there be a way
 * to "call" the dumb component?
 */
interface DumbComponentProps {

}

const SmartComponent = () => {
  const {} = useSmartComponentHook()
  return (
    <DumbComponent/>
  )
}

/**
 * Responsible for the view, but not the data
 * DumbComponents will be exported from libraries and federated
 * modules for extra customization in case data services vary
 * The dumb component:
 * interacts with user
 * makes calls callbacks
 */
const DumbComponent = (props:DumbComponentProps) => {
  return (
    <div>etc</div>
  )
}

/**
 * This component puts everything together.
 * @constructor
 */
const PackagingComponent = () => {

}
