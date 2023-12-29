'use client';
 
import { type EdgeStoreRouter } from '@api/edgestore/[...edgestore]/route';
import { createEdgeStoreProvider } from '@edgestore/react';
 
const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>({
    maxConcurrentUploads:3
  });
 
export { EdgeStoreProvider, useEdgeStore };