'use strict';

/**
 * Memories.js controller
 *
 * @description: A set of functions called "actions" for managing `Memories`.
 */

module.exports = {

  /**
   * Retrieve memories records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.memories.search(ctx.query);
    } else {
      return strapi.services.memories.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a memories record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.memories.fetch(ctx.params);
  },

  /**
   * Count memories records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.memories.count(ctx.query);
  },

  /**
   * Create a/an memories record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.memories.add(ctx.request.body);
  },

  /**
   * Update a/an memories record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.memories.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an memories record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.memories.remove(ctx.params);
  }
};
