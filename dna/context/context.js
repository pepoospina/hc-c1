'use strict';

// -----------------------------------------------------------------
//  This stub Zome code file was auto-generated by hc-scaffold
// -----------------------------------------------------------------

// -----------------------------------------------------------------
//  Exposed functions with custom logic https://developer.holochain.org/API_reference
// -----------------------------------------------------------------

function contextCreate(contextEntry) {
  var contextHash = commit('context', contextEntry);

  var anchorHash = anchor('context', contextHash);
  commit('context', {
    Links: [
      { Base: anchorHash, Link: params.contextHash, Tag: 'contextAnchor' }
    ]
  });

  return contextHash;
}

function contextRead(contextHash) {
  var context = get(contextHash);
  return context;
}

/**
 * @param contextHash
 * @param memberHash
 */
function addMember(params) {
  commit('member', {
    Links: [
      { Base: params.contextHash, Link: params.memberHash, Tag: 'member' }
    ]
  });
  commit('member', {
    Links: [
      { Base: params.memberHash, Link: params.contextHash, Tag: 'member' }
    ]
  });
  return true;
}

/**
 * @param contextHash
 * @param memberHash
 */
function removeMember(params) {
  commit('member', {
    Links: [
      {
        Base: params.contextHash,
        Link: params.memberHash,
        Tag: 'member',
        LinkAction: HC.LinkAction.Del
      }
    ]
  });
  commit('member', {
    Links: [
      {
        Base: params.memberHash,
        Link: params.contextHash,
        Tag: 'member',
        LinkAction: HC.LinkAction.Del
      }
    ]
  });
  return true;
}

/**
 * @param parentContextHash
 */
function listContextChild(params) {
  return getLinks(params.parentContextHash, 'contextChild', { Load: true });
}

/**
 * @return my contexts
 */
function listMyContexts() {
  return getLinks(App.Agent.Hash, 'member', { Load: true });
}

/**
 * @param parentContextHash
 * @param childContextHash
 */
function addContextChild(params) {
  commit('contextChild', {
    Links: [
      {
        Base: params.parentContextHash,
        Link: params.childContextHash,
        Tag: 'contextChild'
      }
    ]
  });
  return true;
}

/**
 * @param parentContextHash
 * @param childContextHash
 */
function removeContextChild(params) {
  commit('contextChild', {
    Links: [
      {
        Base: params.parentContextHash,
        Link: params.childContextHash,
        Tag: 'contextChild',
        LinkAction: HC.LinkAction.Del
      }
    ]
  });
  return true;
}

function anchor(anchorType, anchorText) {
  return call('anchors', 'anchor', {
    anchorType: anchorType,
    anchorText: anchorText
  }).replace(/"/g, '');
}

function anchorExists(anchorType, anchorText) {
  return call('anchors', 'exists', {
    anchorType: anchorType,
    anchorText: anchorText
  });
}

// -----------------------------------------------------------------
//  The Genesis Function https://developer.holochain.org/genesis
// -----------------------------------------------------------------

/**
 * Called only when your source chain is generated
 * @return {boolean} success
 */
function genesis() {
  return true;
}

// -----------------------------------------------------------------
//  Validation functions for every change to the local chain or DHT
// -----------------------------------------------------------------

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {*} entry - the entry data to be set
 * @param {object} header - header for the entry containing properties EntryLink, Time, and Type
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateCommit(entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'context':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'member':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'contextChild':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {*} entry - the entry data to be set
 * @param {object} header - header for the entry containing properties EntryLink, Time, and Type
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validatePut(entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'context':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'member':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'contextChild':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {*} entry - the entry data to be set
 * @param {object} header - header for the entry containing properties EntryLink, Time, and Type
 * @param {string} replaces - the hash for the entry being updated
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateMod(entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case 'context':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'member':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'contextChild':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {string} hash - the hash of the entry to remove
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateDel(entryName, hash, pkg, sources) {
  switch (entryName) {
    case 'context':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'member':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'contextChild':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to validate any changes to the local chain or DHT
 * @param {string} entryName - the type of entry
 * @param {string} baseHash - the hash of the base entry being linked
 * @param {?} links - ?
 * @param {*} pkg - the extra data provided by the validate[X]Pkg methods
 * @param {object} sources - an array of strings containing the keys of any authors of this entry
 * @return {boolean} is valid?
 */
function validateLink(entryName, baseHash, links, pkg, sources) {
  switch (entryName) {
    case 'context':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'member':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    case 'contextChild':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true;
    default:
      // invalid entry name
      return true;
  }
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validatePutPkg(entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateModPkg(entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateDelPkg(entryName) {
  return null;
}

/**
 * Called to get the data needed to validate
 * @param {string} entryName - the name of entry to validate
 * @return {*} the data required for validation
 */
function validateLinkPkg(entryName) {
  return null;
}
